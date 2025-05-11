import Display from "../components/Display";
import GetStarted from "../components/GetStarted";

export default function Playground() {
    return (
        <main className="flex-grow">
            <GetStarted />
            <Display />
        </main>
    )
}
