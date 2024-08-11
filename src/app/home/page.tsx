import Link from "next/link";

export default function page(){
    return(
        <div>
            <div>This is home Page</div>
            <Link href="select_BattleFormat">バトル形式選択へ進む</Link>
        </div>
    )
}