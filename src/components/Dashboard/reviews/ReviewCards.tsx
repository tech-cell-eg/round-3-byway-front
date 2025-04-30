import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/Icon';

type ReviewProps = {
  rating: number;
  userName: string;
  date: string;
  comment: string;
  avatar?: string;
};

export function ReviewCards({ userName, date, comment, avatar }: ReviewProps) {
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    return nameParts
      .map(part => part.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  return (
    <Card className="border  border-gray-300">
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-sm text-gray-600 font-semibold">Rating:</span>
          <div className="flex space-x-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name="star"
                size={24}
                className="fill-yellow-400 stroke-yellow-400"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600 mb-2">
          <Avatar className="bg-red-200">
            {avatar ? (
              <AvatarImage src={avatar} />
            ) : (
              <AvatarFallback>{getInitials(userName)}</AvatarFallback>
            )}
          </Avatar>
          <div className="flex flex-col ">
            <p className="text-gray-900 font-semibold">{userName}</p>
            <p className="text-gray-600 opacity-50">{date}</p>
          </div>
        </div>

        <p className="text-sm text-gray-700">{comment}</p>
      </CardContent>
    </Card>
  );
}
