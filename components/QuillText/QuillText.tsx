import { StringLiteral } from "https://deno.land/x/ts_morph@17.0.1/ts_morph.js";
type HTML = string;

export interface Props {
  html: HTML;
  className?: string,
}

export default function QuillText(props: Props) {
  return (
    <>
      {/* TODO: figure out a way to dedupe links on render page */}
      <div className={props?.className} class="ql-editor" dangerouslySetInnerHTML={{ __html: props.html }}>
      </div>
    </>
  );
}