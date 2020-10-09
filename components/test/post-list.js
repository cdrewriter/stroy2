import { useState } from 'react'
import { useQuery } from 'graphql-hooks'
import ErrorMessage from './error-message'
import PostUpvoter from './post-upvoter'
import Submit from './submit'

export const allPostsQuery = `
query PostDetail($first: Int!, $skip: Int!) {
  allPosts(first: $first, skip: $skip) {
    id
    name
  _allPostsMeta {
    count
  }  
}
`

export const allPostsQueryOptions = (skip = 0) => ({
  variables: { skip, first: 100 },
  updateData: (prevResult, result) => ({
    ...result,
    allPosts: prevResult
      ? [...prevResult.allPosts, ...result.allPosts]
      : result.allPosts,
  }),
})

export default function PostList() {
  const [skip, setSkip] = useState(0)
  const { loading, error, data, refetch } = useQuery(
    allPostsQuery,
    allPostsQueryOptions(skip)
  )

  if (error) return <ErrorMessage message="Error loading posts." />
  if (!data) return <div>Loading</div>

  const { allPosts, _allPostsMeta } = data

  const areMorePosts = allPosts.length < _allPostsMeta.count
  return (
    <>
      <Submit
        onSubmission={() => {
          refetch({ variables: { skip: 0, first: allPosts.length } })
        }}
      />
      <section>
      {/*  <ul>
          {allPosts.map((post, index) => (
            <li key={post.id}>
              <div>
                <span>{index + 1}. </span>
                <a href={post.pricevalue}>{post.name}</a>
                <PostUpvoter
                  id={post.id}
                  votes={post.pricevalue}
                  onUpdate={() => {
                    refetch({ variables: { skip: 0, first: allPosts.length } })
                  }}
                />
              </div>
            </li>
          ))}
                </ul>*/}
        {areMorePosts ? (
          <button onClick={() => setSkip(skip + 100)}>
            {' '}
            {loading && !data ? 'Loading...' : 'Show More'}{' '}
          </button>
        ) : (
          ''
        )}
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: '';
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}</style>
      </section>
    </>
  )
}
