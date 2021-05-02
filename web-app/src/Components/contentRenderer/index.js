import React from "react"

const contentRenderer = ({ meta }) => {
    const renderHeading = (element, index) => (
        <div key={index} className="heading">
            {element.render}
        </div>
    )

    const renderSubHeading = (element, index) => (
        <div key={index} className="sub-heading">
            {element.render}
        </div>
    )

    const renderContent = (element, index) => (
        <div key={index} className="content">
            {typeof element.render === "object" && element.render.length
                ? element.render.map((e, i) => (
                      <div className="sub" key={`${index}-${i}`}>
                          {e}
                      </div>
                  ))
                : element.render}
        </div>
    )

    const renderRemark = (element, index) => (
        <div key={index} className="remark">
            {typeof element.render === "object" && element.render.length
                ? element.render.map((e, i) => (
                      <div className="sub" key={`${index}-${i}`}>
                          {e}
                      </div>
                  ))
                : element.render}
        </div>
    )

    const renderCode = (element, index) => (
        <div key={index} className="code">
            {typeof element.render === "object" && element.render.length
                ? element.render.map((e, i) => (
                      <div className="sub" key={`${index}-${i}`}>
                          {e}
                      </div>
                  ))
                : element.render}
        </div>
    )

    const renderExample = (element, index) => (
        <div key={index} className="example">
            {typeof element.render === "object" && element.render.length
                ? element.render.map((e, i) => (
                      <div className="sub" key={`${index}-${i}`}>
                          {e}
                      </div>
                  ))
                : element.render}
        </div>
    )

    const renderCustom = (element, index) => (
        <div key={index} className={`${element.className || "custom"}`}>
            {element.render}
        </div>
    )

    const renderMap = (element, index) => ({
        HEADING: renderHeading(element, index),
        SUB_HEADING: renderSubHeading(element, index),
        CONTENT: renderContent(element, index),
        REMARK: renderRemark(element, index),
        CODE: renderCode(element, index),
        EXAMPLE: renderExample(element, index),
        CUSTOM: renderCustom(element, index),
    })

    return <div className="content-renderer">{meta.map((element, index) => renderMap(element, index)[element.type])}</div>
}

export default contentRenderer
