import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function page(){
    return(
        <div>
            <form>
                <h1>This is login Page</h1>
                <Input 
                    type="email"
                />
                <Button type="submit">完了</Button>
            </form>
            <Link href="/signin">サインインがまだの方はこちら</Link>
        </div>
        
    
    )
}