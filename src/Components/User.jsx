/* eslint-disable react/prop-types */


const User = ({user}) => {
  const {name,username,email,phone,address} = user
    return (
        <div className="border border-red-500 text-center">
            <h1>{name}</h1>
            <h1>{username}</h1>
            <h2>{email}</h2>
            <h3>{phone}</h3>
            <h5>{address.street}</h5>
            
        </div>
    );
};

export default User;