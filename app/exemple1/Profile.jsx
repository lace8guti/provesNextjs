export default function Profile({user}) {
    return (
      <div className="flex items-center space-x-4">
        <img
          src={user.imageUrl}
          alt={user.name}
          widt = {user.imageSize}
          height = {user.imageSize}
          className = "rounded-full"
        />
        <p className="text-lg">{user.name}</p>
      </div>
    );
  }