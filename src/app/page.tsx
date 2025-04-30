'use client'

import DataSource from '../components/DataSource'
import Diagram from '../components/Diagram'
import axios from 'axios'
import { useDataSourceStore } from '../stores/dataSourceStore'
import { useNodesStore } from '../stores/nodesStore'
import { useEdgesStore } from '../stores/edgesStore'
import { useFormsStore } from '../stores/formsStore'
import getDataSource from '../lib/getDataSource'
import { useEffect, useState } from 'react'
import { useGlobalActionDataStore } from '../stores/globalActionDataStore'
import getGlobalActionData from '../lib/getGlobalActionData'
import getEdges from '../lib/getEdges'
import LoadingDiagram from '../components/Diagram/LoadingDiagram'
import DialogContainer from '../components/DialogContainer'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const dataSrc = useDataSourceStore((state) =>
    getDataSource({ src: state.src, params: state.params }),
  )
  const setNodes = useNodesStore((state) => state.setNodes)
  const setEdges = useEdgesStore((state) => state.setEdges)
  const setForms = useFormsStore((state) => state.setForms)
  const setGlobalActionData = useGlobalActionDataStore(
    (state) => state.setGlobalActionData,
  )

  useEffect(() => {
    async function getData() {
      try {
        const res = await axios.get(dataSrc, {
          headers: {
            Accept: 'application/json, application/problem+json',
          },
        })
        setNodes(res.data.nodes)
        setEdges(getEdges(res.data.edges))
        setForms(res.data.forms)
        setGlobalActionData(getGlobalActionData(res.data))
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return (
    <>
      <DataSource />
      {loading ? (
        <LoadingDiagram />
      ) : (
        <Diagram />
      )}
      <DialogContainer />
    </>
  )
}
