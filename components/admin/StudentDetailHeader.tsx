import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, User } from "lucide-react";

interface StudentDetailHeaderProps {
  student: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    imageUrl?: string;
    _createdAt: string;
    totalEnrollments: number;
    totalAmountPaid: number;
  };
}

export function StudentDetailHeader({ student }: StudentDetailHeaderProps) {
  const fullName = `${student.firstName} ${student.lastName}`;
  const initials = `${student.firstName?.[0] || ''}${student.lastName?.[0] || ''}`.toUpperCase();
  const joinedDate = new Date(student._createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start space-x-6">
          {/* Avatar */}
          <Avatar className="h-24 w-24">
            <AvatarImage src={student?.imageUrl} alt={fullName} />
            <AvatarFallback className="bg-blue-500 text-white text-2xl">
              {initials}
            </AvatarFallback>
          </Avatar>

          {/* Student Info */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-3xl text-black font-bold">{fullName}</h1>
              <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                <div className="flex items-center space-x-1 text-black">
                  <Mail className="h-4 w-4" />
                  <span>{student.email}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {joinedDate}</span>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                <User className="h-3 w-3 mr-1" />
                Student
              </Badge>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {student.totalEnrollments} Course{student.totalEnrollments !== 1 ? 's' : ''}
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                ₦{student.totalAmountPaid?.toLocaleString() || '0'} Total Paid
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
