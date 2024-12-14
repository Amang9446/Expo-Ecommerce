import React from "react";
import { Stack } from "expo-router";
import { Button, ButtonText, VStack, Text, Heading, FormControl, Input, InputField, InputSlot, InputIcon, EyeIcon, EyeOffIcon, HStack } from "@/components";
export default function ligin() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleState = () => {
        setShowPassword((showState) => {
            return !showState;
        });
    };
    return (
        <FormControl className="p-4 border rounded-lg border-outline-300 bg-white m-2 max-w-[500px] ">
            <Stack.Screen options={{ title: 'Login' }} />
            <VStack space="xl">
                <Heading className="text-typography-900">Login</Heading>
                <VStack space="xs">
                    <Text className="text-typography-500">Email</Text>
                    <Input className="min-w-[250px]">
                        <InputField type="text" />
                    </Input>
                </VStack>
                <VStack space="xs">
                    <Text className="text-typography-500">Password</Text>
                    <Input className="text-center">
                        <InputField type={showPassword ? "text" : "password"} />
                        <InputSlot className="pr-3" onPress={handleState}>
                            <InputIcon
                                as={showPassword ? EyeIcon : EyeOffIcon}
                            />
                        </InputSlot>
                    </Input>
                </VStack>
                <HStack space="sm">
                    <Button
                        className="flex-1"
                        onPress={() => {
                        }}
                        variant="outline"
                    >
                        <ButtonText>SignUp</ButtonText>
                    </Button>
                    <Button
                        className="flex-1"
                        onPress={() => {
                        }}
                    >
                        <ButtonText>SignIn</ButtonText>
                    </Button>
                </HStack>
            </VStack>
        </FormControl>
    );
}
