import React, { useState } from 'react'
import { useQuery } from "react-apollo"
import QUERY_VALUE from "../graphql/getDepartmentGroup.graphql"
import { SearchBar } from "vtex.store-components"
import DepartmentGroup from "./DepartmentGroup"
import styles from "./styles.css"
/**
 * Este componente me sirve para desplegar un select y una searchBar que me busca por departamento junto con el valor del input
 * @returns select y searchBar
 */

const DepartmentSearch = () => {
  const { data, loading } = useQuery(QUERY_VALUE)
  console.log("Mis datos son:", data, loading)
  const [slug, setSlug] = useState("")

  return loading ?
  <div>Loading...</div> :
  <div className={`${styles.department__search}`}>
    {/* <h1 className={`${styles["department__search--title"]}`}>Deparment Search</h1> */}
    <div className={`flex ${styles.group__searhbar}`}>
      <DepartmentGroup
        departments={data?.categories[0]?.children}
        handleSetSlug={setSlug}
      />
      <SearchBar
        customSearchPageUrl={slug}
        placeholder="Buscar en exito.com"
        displayMode="search-and-clear-buttons"
      />
    </div>
  </div>
}

export default DepartmentSearch
