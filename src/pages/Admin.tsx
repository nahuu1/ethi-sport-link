import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Admin = () => {
  // Mock booking data
  const bookings = [
    {
      id: "1",
      user: "Abebe Kebede",
      phone: "+251 912 345 678",
      email: "abebe@example.com",
      sport: "Soccer",
      date: "2024-08-22",
      timeSlot: "18:00 - 19:00",
      type: "Group",
      status: "Confirmed"
    },
    {
      id: "2", 
      user: "Hanan Ahmed",
      phone: "+251 923 456 789",
      email: "hanan@example.com",
      sport: "Basketball",
      date: "2024-08-22",
      timeSlot: "16:00 - 17:00",
      type: "Individual",
      status: "Confirmed"
    },
    {
      id: "3",
      user: "Dawit Tadesse",
      phone: "+251 934 567 890", 
      email: "dawit@example.com",
      sport: "Soccer",
      date: "2024-08-23",
      timeSlot: "19:00 - 20:00",
      type: "Group",
      status: "Pending"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            EUSA Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage court bookings and monitor real-time activity
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="court-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Today's Bookings</p>
                <p className="text-3xl font-bold text-primary">12</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </Card>
          
          <Card className="court-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Courts</p>
                <p className="text-3xl font-bold text-primary">4</p>
              </div>
              <div className="text-4xl">🏟️</div>
            </div>
          </Card>
          
          <Card className="court-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Users</p>
                <p className="text-3xl font-bold text-primary">256</p>
              </div>
              <div className="text-4xl">👥</div>
            </div>
          </Card>
          
          <Card className="court-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Revenue</p>
                <p className="text-3xl font-bold text-primary">₦5,420</p>
              </div>
              <div className="text-4xl">💰</div>
            </div>
          </Card>
        </div>

        {/* Bookings Table */}
        <Card className="court-card">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">Recent Bookings</h2>
                <p className="text-muted-foreground">
                  Real-time booking management and monitoring
                </p>
              </div>
              <Badge className="bg-primary text-primary-foreground">
                🔴 Live Updates
              </Badge>
            </div>
          </div>
          
          <div className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Sport</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{booking.user}</div>
                        <div className="text-sm text-muted-foreground">{booking.email}</div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm">{booking.phone}</TableCell>
                    <TableCell>
                      <Badge variant={booking.sport === "Soccer" ? "default" : "secondary"}>
                        {booking.sport === "Soccer" ? "⚽" : "🏀"} {booking.sport}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{booking.date}</div>
                        <div className="text-sm text-muted-foreground">{booking.timeSlot}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{booking.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={booking.status === "Confirmed" ? "default" : "secondary"}
                        className={booking.status === "Confirmed" ? "bg-primary" : ""}
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Edit
                        </Button>
                        <Button size="sm" variant="destructive">
                          Cancel
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        {/* Feature Notice */}
        <Card className="mt-8 bg-muted/30 border-primary/20">
          <div className="p-6 text-center">
            <div className="text-5xl mb-4">🔌</div>
            <h3 className="text-xl font-semibold mb-2">
              Connect Supabase for Full Functionality
            </h3>
            <p className="text-muted-foreground mb-4">
              This admin dashboard requires Supabase integration for real-time updates, 
              authentication, and database management.
            </p>
            <Button className="bg-primary text-primary-foreground">
              Setup Backend Integration
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Admin;