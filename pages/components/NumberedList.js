import { Fragment } from "react";

export default function NumberedList({ title, list }) {
    console.log(list);
    return (
        <div className="numbered-list-container">
            {list?.map((element, index) => {
                return (
                    <Fragment key={element.title}>
                        <section className="hstack">
                            <div className="numbered-list-number">
                                {"0" + (index + 1)}
                            </div>
                            <div className="numbered-list-element-container">
                                <h4>
                                    {element.title}
                                </h4>
                                <p className="numbered-list-text">
                                    {element.text}
                                </p>
                            </div>
                        </section>
                    </Fragment>
                );
            })}
        </div>
    );
}
