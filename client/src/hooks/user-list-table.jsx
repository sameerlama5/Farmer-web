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
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";

export default function UserApprovalTable(props) {
  const [users, setUsers] = useState(props.userList);
  useEffect(() => {
    setUsers(props.userList);
  }, [props.userList]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [action, setAction] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleAction = (user, actionType) => {
    setSelectedUser(user);
    setAction(actionType);
    setDialogOpen(true);
  };

  const confirmAction = async (id) => {
    setDialogOpen(false);
    if (action == "approve") {
      await axios.patch(
        process.env.NEXT_PUBLIC_API_URL + "/approve-user/" + selectedUser._id
      );
    } else {
      await axios.patch(
        process.env.NEXT_PUBLIC_API_URL + "/reject-user/" + selectedUser._id
      );
    }
    props.fetchUsers();
  };

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Registration Date</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell className="font-medium">{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>
                {new Date(user.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-2">
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
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to {action} the registration for{" "}
              {selectedUser?.fullName}?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2l">
            <Button
              className=" text-2xl"
              variant="outline"
              onClick={() => setDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button className=" text-2xl" onClick={() => confirmAction()}>
              Confirm
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
