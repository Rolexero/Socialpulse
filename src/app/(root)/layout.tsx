/** @jsxImportSource react */

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../../types/supabase";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });

  const { data, error } = await supabase.auth.getUser();

  if (error?.status === 401) {
  }

  return (
    <>
      {error?.status === 401 ? (
        <Button color="primary">Button</Button>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
