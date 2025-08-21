"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

interface StudentsTableProps {
  students: Array<{
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl?: string;
    fullName: string;
    joinedDate: string;
    totalEnrollments: number;
    totalAmountPaid: number;
  }>;
}

export function StudentsTable({ students }: StudentsTableProps) {
  return (
    <div className="rounded-md border bg-white text-black">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Enrollments</TableHead>
            <TableHead>Total Paid</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => {
            const initials = `${student.firstName?.[0] || ''}${student.lastName?.[0] || ''}`.toUpperCase();
            
            return (
              <TableRow key={student._id} className="hover:bg-gray-50">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={student.imageUrl} alt={student.fullName} />
                      <AvatarFallback className="bg-blue-500 text-white text-sm">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{student.fullName}</p>
                    </div>
                  </div>
                </TableCell>
                
                <TableCell>
                  <p className="text-sm">{student.email}</p>
                </TableCell>
                
                <TableCell>
                  <Badge variant="outline" className="text-black">
                    {student.totalEnrollments} Course{student.totalEnrollments !== 1 ? 's' : ''}
                  </Badge>
                </TableCell>
                
                <TableCell>
                  <p className="font-medium">₦{student.totalAmountPaid?.toLocaleString() || '0'}</p>
                </TableCell>
                
                <TableCell>
                  <p className="text-sm">{student.joinedDate}</p>
                </TableCell>
                
                <TableCell>
                  <Link href={`/admin/students/${student._id}`}>
                    <Button variant="outline" className="text-white cursor-pointer" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
