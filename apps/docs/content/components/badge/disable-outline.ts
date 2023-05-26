const App = `import { Badge, Avatar } from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Badge content="5" color="danger" shape="rectangle" disableOutline>
        <Avatar
          isBordered
          radius="lg"
          src="https://i.pravatar.cc/150?u=a042f81f4e29026024d"
        />
      </Badge>
      <Badge content="5" color="danger" shape="circle" disableOutline>
        <Avatar
          isBordered
          radius="full"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </Badge>
    </div>
  );
}`;

const react = {
  "/App.jsx": App,
};

export default {
  ...react,
};