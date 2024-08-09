import { Button } from "@/shared/components/button";
import { mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";

const Main = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center space-y-4 px-[32px]">
      <h1 className="text-[62px] font-black text-white font-montserrat cursor-default">
        REAL TIME SHOPING
      </h1>
      <div className="flex space-x-3">
        <Button
          backgroundColor="bg-dark-gray"
          hoverBackgroundColor="hover:bg-yellow"
          color="text-white"
          hoverColor="hover:text-black"
        >
          Login
        </Button>
        <Button>Sign up</Button>
      </div>
      <div className="flex space-x-[32px] items-center cursor-pointer">
        <h1 className="text-h1 font-black text-white mb-1">
          Continue as Guest
        </h1>
        <Icon path={mdiArrowRight} size="32px" color="white"/>
      </div>
    </div>
  );
};

export default Main;
