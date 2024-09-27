import { BuilderComponent, builder } from "@builder.io/react"
import { useEffect, useState } from "react"
import { withRouter } from "./withRouter"
import Container from "./components/container/container"
import Section from "./components/section/section"
import Heading from "./components/heading/heading"
import "./blog-article.css"

// TO DO: replace with your own Public API Key
builder.init(import.meta.env.VITE_PUBLIC_BUILDER_KEY)

function BlogArticle({ match }) {
  const [article, setArticle] = useState(null)

  useEffect(() => {
    builder
      .get("blog-article", {
        // Include references, like our `author` ref
        options: { includeRefs: true },
        query: {
          // Get the specific article by slug
          "data.slug": match.params.slug,
        },
      })
      .toPromise()
      .then((blogArticle) => setArticle(blogArticle))
  }, [match.params.slug])

  useEffect(() => {
    console.log("article", article)

    // console.log(new Intl.DateTimeFormat("en-US", options).format(article.data.date))
  }, [article])

  const formatDate = (date) => {
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    if (date) {
      return new Intl.DateTimeFormat("en-US", options).format(date)
    } else {
      return ""
    }
  }

  return (
    <>
      {article && (
        <Container Size="X Large">
          <Section>
            <Heading Size="5" Text={formatDate(article.data.date)} />
          </Section>
          <Section Size="8">
            <Heading Size="9" Text={article.data.title} className="leading-none bold" />
          </Section>
          {article.data.authors && (
            <Section>
              <div className="flex gap-3 items-center">
                <Heading Size="5" Text="By:" />
                <div className="flex gap-5 items-center">
                  {article.data.authors.map((data) => {
                    console.log("data", data.author.value)
                    return (
                      <>
                        {data.author?.value?.data && (
                          <div className="flex gap-3 items-center" key={data.author.value.id}>
                            <div className="rounded-full overflow-hidden bg-center" style={{ height: "40px", width: "40px" }}>
                              <img src={data.author.value.data.photo} />
                            </div>
                            <Heading Size="5" Text={data.author.value.data.fullName} />
                          </div>
                        )}
                      </>
                    )
                  })}
                </div>
              </div>
            </Section>
          )}
          <Section Size="9">
            <div className="flex">
              <div className="w-full pr-[60px] blog-post-summary w-richtext">
                <BuilderComponent name="blog-article" content={article} options={{ includeRefs: true }} />
              </div>
              <div className="flex-none" style={{ width: "292px", paddingLeft: "60px", borderLeft: "1px solid var(--border-gray)" }}>
                <div className="sticky top-0">Categories</div>
              </div>
            </div>
          </Section>
        </Container>
      )}
    </>
  )
}

export default withRouter(BlogArticle)
