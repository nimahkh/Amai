import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'

const IndexPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Hello World</h1>
                <section className="content-body">
                    Yes you did it
                </section>
            </article>
        </div>
    </Layout>
)

export default IndexPage
