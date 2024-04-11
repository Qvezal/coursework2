import style from "./badge.module.css";

type props = {
    children: React.ReactNode;
}

export default function Badge(props: props) {	
	return (
		<div className={style.badge}>{props.children}</div>
	)
}
