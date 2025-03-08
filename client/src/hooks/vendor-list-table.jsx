"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { Badge } from "lucide-react";

export default function UserApprovalTable({ vendorList, fetchUsers }) {
  const [vendors, setVendors] = useState(vendorList);

  useEffect(() => {
    setVendors(vendorList);
  }, [vendorList]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [action, setAction] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleAction = (user, actionType) => {
    setSelectedUser(user);
    setAction(actionType);
    setDialogOpen(true);
  };

  const confirmAction = async () => {
    if (!selectedUser) return;

    setDialogOpen(false);

    try {
      if (action === "approve") {
        await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/approve-user/${selectedUser._id}`
        );

        // Send an approval email
        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
              from_name: "Farmer-web",
              to_name: selectedUser.fullName,
              from_email: "tamansameer5@gmail.com",
              to_email: selectedUser.email,
              message: `Congratulations, ${selectedUser.fullName}! Your vendor account has been approved.`,
            },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
          )
          .then(
            () => {
              console.log("Approval email sent successfully.");
            },
            (error) => {
              console.error("Error sending approval email:", error);
            }
          );
      } else {
        await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/reject-user/${selectedUser._id}`
        );
      }

      fetchUsers();
    } catch (error) {
      console.error(`Error ${action}ing user:`, error);
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendors.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell className="font-medium">{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>{user.isVerified ? "Approved" : "Pending"}</TableCell>
              <TableCell>
                <div className="flex justify-items-end gap-2">
                  <Button
                    onClick={() => handleAction(user, "approve")}
                    variant="outline"
                    size="sm"
                    className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200"
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleAction(user, "reject")}
                    variant="outline"
                    size="sm"
                    className="bg-red-100 text-red-800 hover:bg-red-200 border-red-200"
                  >
                    Reject
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialog for Confirming Actions */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to {action} the registration for{" "}
              {selectedUser?.fullName}?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={confirmAction}>Confirm</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
