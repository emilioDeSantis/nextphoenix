import { Fragment } from "react";

export default function NumberedList({ title, list }) {
    console.log(list);
    return (
        <Fragment>
            <h3>{title}</h3>
            <hr />
            {list?.map((element, index) => {
                return (
                    <Fragment key={element.title}>
                        <div>{element.title}</div>
                        {/* <section className="container">
                            <div>{"0" + (index + 1)}</div>
                            <div>
                                <h4>{element.title}</h4>
                                <p>{element.text}</p>
                            </div>
                            <style jsx>{`
                                .container {
                                    display: flex;
                                    flex-direction: row;
                                }
                            `}</style>
                        </section>
                        <hr /> */}
                    </Fragment>
                );
            })}
        </Fragment>
    );
}
