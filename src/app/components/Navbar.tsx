"use client"

import React, {useState} from "react";


import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';



export default function Navbar() {
    const [email, setEmail] = useState("");
    const { toast } = useToast()

    // sends data to the form spark
    const handleSubmit = async () => {
		try {
            console.log(email)
			// const res = await fetch('https://hello.com', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify({ email: email }),
			// });

			// if (!res.ok) {
			// 	throw new Error('Newsletter email creation failed');
            //  return
			// }

			// const data = await res.json(); // Assuming the server responds with JSON
			// console.log('Success:', data);
			toast({
				title: 'Newsletter',
				description: 'Your newsletter subscription has been created.',
			});
		} catch (error: any) {
			console.error('Error:', error.message);
			// Handle error scenario, like showing error message to the user
		}
	};


	return (
		<div className="flex flex-col items-center border-b bg-[#1e1f1e]">
			<nav className="flex items-center w-full max-w-screen-lg justify-between p-4 bg-[#1e1f1e] text-[#e8e8e8]">
				<div className="flex items-center">
					<span className="text-xl font-bold">News Feed</span>
				</div>

				<Dialog>
					<DialogTrigger asChild>
						<button
							id="newsletterBtn"
							className="bg-[#363737] text-white text-xs p-2 rounded-lg ring-1 ring-[#fdff63]"
						>
							Sign up for Newsletter
						</button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Newsletter</DialogTitle>
							<DialogDescription>
								Register for our newsletter to get regular
								updates
							</DialogDescription>
						</DialogHeader>
						<div className="grid gap-4 py-4">
							<div className="grid grid-cols-4 items-center gap-4">
								<Label htmlFor="name" className="text-right">
									Email
								</Label>
								<Input
									id="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									className="col-span-3"
								/>
							</div>
						</div>
						<DialogFooter>
							<Button
								onClick={handleSubmit}
								className="bg-[#363737]"
							>
								Submit
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</nav>
		</div>
	);
}
