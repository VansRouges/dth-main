"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, DollarSign } from "lucide-react";
import Link from "next/link";

interface StudentCardProps {
  student: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl?: string;
    fullName: string;
    joinedDate: string;
    totalEnrollments: number;
    totalAmountPaid: number;
  };
}

export function StudentCard({ student }: StudentCardProps) {
  const initials = `${student.firstName?.[0] || ''}${student.lastName?.[0] || ''}`.toUpperCase();
  
  return (
    <Link href={`/admin/students/${student._id}`} className="block">
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={student.imageUrl} alt={student.fullName} />
            <AvatarFallback className="bg-blue-500 text-white">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-black text-lg">{student.fullName}</h3>
            <p className="text-sm text-black">{student.email}</p>
          </div>
          <Badge variant="outline" className="ml-2 text-black">
            {student.totalEnrollments} Course{student.totalEnrollments !== 1 ? 's' : ''}
          </Badge>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center text-black">
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-blue-500" />
              </div>
              <p className="text-xs text-muted-foreground">Courses</p>
              <p className="text-sm font-semibold">{student.totalEnrollments}</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-green-500" />
              </div>
              <p className="text-xs text-muted-foreground">Total Paid</p>
              <p className="text-sm font-semibold">₦{student.totalAmountPaid?.toLocaleString() || '0'}</p>
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <Calendar className="h-4 w-4 text-purple-500" />
              </div>
              <p className="text-xs text-muted-foreground">Joined</p>
              <p className="text-sm font-semibold">{student.joinedDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
