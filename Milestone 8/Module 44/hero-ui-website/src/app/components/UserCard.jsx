import { CircleDollar } from "@gravity-ui/icons";
import { Card, Chip } from "@heroui/react";
import { User } from "lucide-react";
const UserCardInfo = ({ user }) => {
  const { name, email, message,phone, company } = user;
  return (
    <Card className="">
      <div className="flex flex-row-reverse">
      <User
        aria-label="Dollar sign icon"
        className="text-primary size-6"
        role="img"
      />
      </div>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Description>{message}</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Card.Description className="flex flex-col space-y-1">
          <Chip className="w-30">{phone}</Chip>
          <Chip color="warning">{email}</Chip>
        </Card.Description>
      </Card.Footer>
    </Card>
  );
};

export default UserCardInfo;
