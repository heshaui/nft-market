"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Search, Globe, Sun, Moon, Bell, Menu, X } from "lucide-react";
import { Input } from "@/components/UI/Input";
import WalletConnect from "@/components/Wallet";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const NavBar = () => {
	const router = useRouter()
	const pathname = usePathname()
	const { theme, setTheme } = useTheme()

	const [mounted, setMounted] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const menus = [
		{ name: 'COLLECTIONS', path: '/collections' },
		{ name: 'PORTFOLIO', path: '/portfolio' },
		{ name: 'ACTIVITY', path: '/activity' },
		{ name: 'AIRDROP', path: '/airdrop' }
	]

	const handleNavigation = (path: string) => {
		router.push(path)
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	return (
		<header className="border-b border-gray-800 px-6 py-3">
			<div className="flex items-center justify-between">
				{/* 左侧图标、菜单 */}
				<div className="flex items-center space-x-8">
					<img src="/logo.png" alt="RCC" width={100} height={100} />
					{/* 桌面端导航菜单 */}
					<nav className="hidden md:flex space-x-6 text-sm">
						{
							menus.map((menu, index) => {
								const active = pathname === menu.path
								return (
									<a 
										key={index} 
										className={`cursor-pointer ${
											active
											  ? "text-[#8e67e9] glow-text"
											  : "text-foreground hover:text-white"
										}`}
										onClick={() => handleNavigation(menu.path)}
									>
										{ menu.name }
									</a>
								)
							})
						}
					</nav>
				</div>
				{/* PC右侧筛选、连接钱包、主题切换 */}
				<div className="hidden md:flex items-center space-x-4">
					<div className="relative w-64">
						<Input
							type="search"
							placeholder="Collections, wallets, or ENS"
							className="bg-gray-900 border-gray-700 pl-10"
						/>
						<Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground" />
					</div>
					<Globe className="h-5 w-5 text-foreground" />
					{
						// 避免服务器端渲染时的主题图标闪烁
						!mounted ? null : (
							<button
								className="text-foreground hover:text-white"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								{theme === "dark" ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</button>
						)
					}
					<Bell className="h-5 w-5 text-foreground" />
					<ConnectButton />
				</div>
				{/* 移动端按钮 */}
				<button 
					className="md:hidden text-foreground"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					{isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>
			{/* 移动端菜单 */}
			{
				isMenuOpen && (
					<div className="md:hidden fixed inset-0 top-[73px] bg-background z-50 flex flex-col p-4 space-y-4">
						<nav className="flex flex-col space-y-4">
							{
								menus.map((menu, index) => {
									const active = pathname === menu.path
									return (
										<a 
											key={index} 
											className={`cursor-pointer ${
												active
												? "text-[#8e67e9] glow-text"
												: "text-foreground hover:text-white"
											}`}
											onClick={() => {
												handleNavigation(menu.path);
												setIsMenuOpen(false);
											}}
										>
											{ menu.name }
										</a>
									)
								})
							}
						</nav>
						<div className="relative w-full space-y-4">
							<Input
								type="search"
								placeholder="Collections, wallets, or ENS"
								className="bg-gray-900 border-gray-700 pl-10 w-full"
							/>
							<Search className="absolute left-3 top-2.5 h-4 w-4 text-foreground" />
						</div>
						
						<div className="flex items-center justify-between">
							<Globe className="h-5 w-5 text-foreground" />
							{!mounted ? null : (
								<button
									onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
									className="text-foreground hover:text-white"
								>
									{theme === "dark" ? (
									<Sun className="h-5 w-5" />
									) : (
									<Moon className="h-5 w-5" />
									)}
								</button>
							)}
							<Bell className="h-5 w-5 text-foreground" />
							<WalletConnect />
						</div>
					</div>
				)
			}
		</header>
	)
}

export default NavBar;