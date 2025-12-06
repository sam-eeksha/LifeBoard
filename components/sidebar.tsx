"use client";
import React, { useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

import Image from "next/image";
import { Icon } from "@iconify/react";
const Sidebar = () => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  //const [placement, setPlacement] = React.useState("left");

  useEffect(() => {
    onOpen();
  }, []);

  const toggleSidebar = () => {
    if (isOpen) onClose();
    else onOpen();
  };

  return (
    <>
      {!isOpen && (
        <Button
          isIconOnly
          variant="flat"
          // className="fixed top-4 left-4 z-50"
          onPress={toggleSidebar}
        >
          <Icon icon="mingcute:arrows-right-fill" width="24" height="24" />
        </Button>
      )}
      <Drawer
        size={"sm"}
        // isDismissable={false}
        defaultOpen
        isOpen={isOpen}
        hideCloseButton
        placement={"left"}
        onOpenChange={(open) => (open ? onOpen() : onClose())}
        classNames={{
          base: "top-16", // 👈 Moves drawer below the header
        }}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex justify-between items-center">
                Menu
                {/* Toggle button inside drawer header */}
                <Button isIconOnly variant="light" onPress={toggleSidebar}>
                  <Icon
                    icon="mingcute:arrows-left-fill"
                    width="24"
                    height="24"
                  />
                </Button>
              </DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col gap-4">
                  <Button variant="light" className="justify-start">
                    <Icon
                      icon="streamline-ultimate-color:car-dashboard-speed"
                      width="24"
                      height="24"
                    />
                    Dashboard
                  </Button>

                  <Button variant="light" className="justify-start">
                    <Icon icon="noto:money-bag" width="128" height="128" />
                    Finances
                  </Button>

                  <Button variant="light" className="justify-start">
                    <Icon
                      icon="streamline-ultimate-color:notes-paper-text"
                      width="24"
                      height="24"
                    />
                    Notes
                  </Button>
                  <Button variant="light" className="justify-start">
                    <Icon
                      icon="streamline-ultimate-color:notes-book"
                      width="24"
                      height="24"
                    />
                    Blog
                  </Button>
                  <Button variant="light" className="justify-start">
                    <Icon
                      icon="material-icon-theme:todo"
                      width="32"
                      height="32"
                    />
                    To Do
                  </Button>
                </div>
              </DrawerBody>
              <DrawerFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
