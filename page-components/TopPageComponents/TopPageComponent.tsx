import { Advantages, HHData, Htag, Sort, Tag } from "../../components"
import { TopPageComponentProps } from "./TopPageComponent.props"
import styles from "./TopPageComponent.module.css"
import { TopLevelCategory } from "../../interfaces/toppage.interface"
import { SortEnum } from "../../components/Sort/Sort.props"
import { useReducer } from "react"
import { sortReducer } from "./sort.reducer"
 




export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {

    const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {products , sort: SortEnum.Rating});

    const setSort = (sort: SortEnum) => {
        dispatchSort({ type: sort })
    }

    return (
        <div className={styles.wrraper}>
            <div className={styles.title}>
                <Htag tag='h1'>{page.title}</Htag>
                {products && <Tag color='gray' size='medium'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort}></Sort>
            </div>
            <div>
                {products && sortedProducts.map(p => (<div key={p.id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag='h2'>Вакансии - {page.category}</Htag>
                <Tag color='red' size='medium'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HHData {...page.hh}></HHData>}
            {page.advantages && page.advantages.length > 0 && <div>
                <Htag tag="h2">Приемущества</Htag>
                <Advantages advantages={page.advantages}/>
            </div>
            }
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html:page.seoText}}></div>}
            <Htag tag="h2">Получаемые навыки</Htag>
            {page.tags.map(t => <Tag key={t} color="primary">{t}</Tag>)}
        </div>
    )
}
