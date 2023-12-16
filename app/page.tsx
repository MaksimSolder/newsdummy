import Image from 'next/image'
import Accordion from "@/components/Accordion/Accordion";
import {getAllNews} from "@/app/api/news.api";
import CardContainer from "@/components/CardContainer/CardContainer";
import FilterDesk from "@/components/FilterContainer/FilterDesk";

export default function Home() {
  return (
    <div>
      <Accordion/>
        <div className="side-main">
        <CardContainer/>
            <FilterDesk/>
        </div>
    </div>
  )
}
