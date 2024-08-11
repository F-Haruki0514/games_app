import Link from "next/link";

export default function page(){
    return(
        <div>
            <div>This is select battle format page</div>
            <Link href="/single_play">１人で遊ぶ</Link>
            <Link href="/pair_play">２人で遊ぶ</Link>
        </div>
    )
}