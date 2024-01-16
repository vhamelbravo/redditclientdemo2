import React from "react";
import Navbar from "../Components/Navbar.js";

function Blog() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 h-screen flex justify-center items-start translate-y-20">
        <p className="text-white ">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et
          rhoncus lectus. <br /> <br /> Pellentesque maximus ultrices ipsum, nec
          gravida nunc. Maecenas facilisis bibendum quam ac sodales. Quisque et
          quam volutpat, viverra arcu ac, mollis orci. Pellentesque quis
          consequat nibh, id tempor purus. Fusce facilisis neque id arcu
          euismod, nec rhoncus arcu lacinia. Suspendisse ante odio, dapibus ut
          porta non, semper eleifend quam. Proin fringilla viverra justo nec
          venenatis. <br /> <br /> Maecenas placerat lobortis aliquam. Sed
          ultrices lacinia ante non semper. Nunc at porttitor eros, at eleifend
          diam. Donec commodo sit amet ex non facilisis. Phasellus bibendum erat
          ac sodales viverra. Duis purus magna, sodales sed dui a, laoreet
          vehicula diam. In gravida, mi non elementum rhoncus, magna ipsum
          posuere quam, sed posuere magna lacus vitae nisl. Vivamus ex purus,
          vestibulum porttitor arcu et, congue faucibus lectus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Aenean sollicitudin posuere turpis lobortis mollis. Integer ut
          enim risus. Quisque fringilla, ligula laoreet facilisis pellentesque,
          urna justo volutpat justo, euismod ornare tellus lorem eu nisi. Donec
          semper nunc at diam vestibulum, imperdiet placerat lorem rutrum. Proin
          a erat vestibulum, lacinia sapien id, interdum nunc.{" "}
        </p>
      </div>
    </div>
  );
}

export default Blog;
