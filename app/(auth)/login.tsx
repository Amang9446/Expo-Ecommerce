import React from "react";
import { Redirect, Stack } from "expo-router";
import { Button, ButtonText, VStack, Text, Heading, FormControl, Input, InputField, InputSlot, InputIcon, EyeIcon, EyeOffIcon, HStack } from "@/components";
import { useMutation } from "@tanstack/react-query";
import { login, signup } from "@/api/auth";
import { useAuth } from "@/store/authStore";
export default function loginComponent() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const saveUser = useAuth((state) => state.setUser);
    const saveToken = useAuth((state) => state.setToken);
    const isLoggedIn = useAuth((state) => !!state.token)

    const loginMutation = useMutation({
        mutationFn: () => login(email, password),
        onSuccess: (data) => {
            if (data.user && data.token) {
                saveToken(data.token);
                saveUser(data.user);
            }
            setEmail("");
            setPassword("");
            console.log('Login Successfully', data);
        },
        onError: (error) => {
            console.log('Error', error);
        }
    })

    const signupMutation = useMutation({
        mutationFn: () => signup(email, password),
        onSuccess: (data) => {
            if (data.user && data.token) {
                saveToken(data.token);
                saveUser(data.user);
            }
            setEmail("");
            setPassword("");
            console.log('Signup Successfully', data)
        },
        onError: (error) => {
            console.log('Error', error)
        }
    })

    const handleState = () => {
        setShowPassword((showState) => {
            return !showState;
        });
    };

    if (isLoggedIn) {
        return <Redirect href={'/'} />

    }


    return (
        <FormControl isInvalid={signupMutation.error || signupMutation.error} className="p-4 border rounded-lg border-outline-300 bg-white m-2 max-w-[500px] ">
            <Stack.Screen options={{ title: 'Login' }} />
            <VStack space="xl">
                <Heading className="text-typography-900">Login</Heading>
                <VStack space="xs">
                    <Text className="text-typography-500">Email</Text>
                    <Input className="min-w-[250px]">
                        <InputField value={email} onChangeText={setEmail} type="text" />
                    </Input>
                </VStack>
                <VStack space="xs">
                    <Text className="text-typography-500">Password</Text>
                    <Input className="text-center">
                        <InputField value={password} onChangeText={setPassword} type={showPassword ? "text" : "password"} />
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
                        onPress={() => signupMutation.mutate()}
                        variant="outline"
                    >
                        <ButtonText>SignUp</ButtonText>
                    </Button>
                    <Button
                        className="flex-1"
                        onPress={() => loginMutation.mutate()}
                    >
                        <ButtonText>SignIn</ButtonText>
                    </Button>
                </HStack>
            </VStack>
        </FormControl>
    );
}
