import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/Table";
import { useRouter } from "next/navigation";
import useGlobalState from "@/hooks/useGlobalState";

type CollectionProps = {
  collections: any[];
  loading?: boolean;
};

// 生成随机钱包地址头像的函数
function getRandomAvatarUrl(): string {
  const services = [
    // Ethereum Blockies
    (addr: string) => `https://eth-blockies.herokuapp.com/${addr}.png`,
    // Dicebear Pixel Art
    (addr: string) => `https://api.dicebear.com/6.x/pixel-art/svg?seed=${addr}`,
    // Dicebear Avatars
    (addr: string) => `https://api.dicebear.com/6.x/avataaars/svg?seed=${addr}`,
  ];

  // 生成随机的钱包地址
  const randomAddr = '0x' + Array.from({length: 40}, () => 
    Math.floor(Math.random() * 16).toString(16)).join('');
  
  // 随机选择一个服务
  const randomService = services[Math.floor(Math.random() * services.length)];
  
  return randomService(randomAddr);
}

export function CollectionsTable({ collections, loading }: CollectionProps) {
  const router = useRouter();
  const { setState } = useGlobalState();
  
  return (
    <div className="px-6 py-4">

    </div>
  )
}
