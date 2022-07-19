import React from "react";
import { Center, Spinner } from "native-base";

export function Loading() {
  return (
    <Center flex={1} color="gray.700">
      <Spinner color="secondary.700" />
    </Center>
  );
}
