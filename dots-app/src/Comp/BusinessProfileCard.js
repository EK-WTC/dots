import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe } from "lucide-react";

const BusinessProfileCard = ({ business }) => {
  return (
    <Card className="w-full max-w-sm p-4 shadow-lg rounded-2xl">
      <div className="flex items-center space-x-4">
        <img
          src={business.image || "/default-avatar.png"}
          alt={business.name}
          className="w-16 h-16 rounded-full border"
        />
        <div>
          <h2 className="text-xl font-semibold">{business.name}</h2>
          <p className="text-sm text-gray-500">{business.industry}</p>
        </div>
      </div>
      <CardContent className="mt-4 space-y-2">
        <div className="flex items-center space-x-2 text-gray-600">
          <Mail size={16} />
          <span>{business.email}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Phone size={16} />
          <span>{business.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Globe size={16} />
          <a href={business.website} className="text-blue-600 hover:underline">
            {business.website}
          </a>
        </div>
        <div className="flex justify-between mt-4">
          <Button variant="outline">View Profile</Button>
          <Button>Contact</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessProfileCard;
