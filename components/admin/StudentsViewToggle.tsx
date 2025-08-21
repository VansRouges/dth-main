"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LayoutGrid, Table } from 'lucide-react';
import { StudentCard } from './StudentCard';
import { StudentsTable } from './StudentsTable';

interface StudentsViewToggleProps {
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
    averageProgress: number;
  }>;
}

export function StudentsViewToggle({ students }: StudentsViewToggleProps) {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <div className="bg-white rounded-xl p-6">
      {/* View Mode Toggle */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-semibold">Students List</h4>
        <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
          <Button
            variant={viewMode === 'cards' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('cards')}
            className="h-8 px-3"
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === 'table' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('table')}
            className="h-8 px-3"
          >
            <Table className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Students Display */}
      {viewMode === 'cards' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <StudentCard key={student._id} student={student} />
          ))}
        </div>
      ) : (
        <StudentsTable students={students} />
      )}
    </div>
  );
}
