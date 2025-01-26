import cx from "classnames";

type RichTextText = {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

type RichTextParagraph = {
  type: "paragraph";
  children: RichTextText[];
};

type RichTextHeading = {
  type: "heading";
  level: number;
  children: RichTextText[];
};

type RichTextListItem = {
  type: "list-item";
  children: RichTextText[];
};

type RichTextList = {
  type: "list";
  format: "ordered" | "unordered";
  children: RichTextListItem[];
};

type RichTextSection = RichTextParagraph | RichTextHeading | RichTextList;

type RichText = RichTextSection[];

export const RichTextTextLeaf: React.FC<{ section: RichTextText }> = ({
  section,
}) => {
  const { text, bold, italic, underline } = section;
  const isDecorated = bold || italic || underline;

  if (!isDecorated) {
    return <>{text}</>;
  }

  const classes = cx({
    "font-bold": bold,
    italic: italic,
    underline: underline,
  });

  return <span className={classes}>{text}</span>;
};

export const RichTextParagraphBlock: React.FC<{
  section: RichTextParagraph;
}> = ({ section }) => {
  return (
    <p className="text-base/7 mb-4">
      {section.children.map((child, index) => (
        <RichTextTextLeaf key={index} section={child} />
      ))}
    </p>
  );
};

export const RichTextHeadingBlock: React.FC<{
  section: RichTextHeading;
}> = ({ section }) => {
  if (section.level === 1) {
    return (
      <h2
        className="text-2xl font-semibold tracking-tight sm:text-3xl mt-8 mb-4"
        data-testid="heading"
      >
        {section.children.map((child, index) => (
          <RichTextTextLeaf key={index} section={child} />
        ))}
      </h2>
    );
  }
  if (section.level === 2) {
    return (
      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl mt-6 mb-3">
        {section.children.map((child, index) => (
          <RichTextTextLeaf key={index} section={child} />
        ))}
      </h3>
    );
  }
  if (section.level === 3) {
    return (
      <h4 className="text-lg font-semibold tracking-tight sm:text-xl mt-4 mb-2">
        {section.children.map((child, index) => (
          <RichTextTextLeaf key={index} section={child} />
        ))}
      </h4>
    );
  }
};

export const RichTextListItems: React.FC<{ section: RichTextListItem }> = ({
  section,
}) => {
  return (
    <li className="text-base/7">
      {section.children.map((child, index) => (
        <RichTextTextLeaf key={index} section={child} />
      ))}
    </li>
  );
};

export const RichTextListBlock: React.FC<{
  section: RichTextList;
}> = ({ section }) => {
  if (section.format === "ordered") {
    return (
      <ol className="list-decimal list-inside">
        {section.children.map((child, index) => (
          <RichTextListItems key={index} section={child} />
        ))}
      </ol>
    );
  } else {
    return (
      <ul className="list-disc list-inside">
        {section.children.map((child, index) => (
          <RichTextListItems key={index} section={child} />
        ))}
      </ul>
    );
  }
};

export const RichTextRenderer: React.FC<{ richText: RichText }> = ({
  richText,
}) => {
  return (
    <div className="text-base/7">
      {richText.map((section, index) => {
        switch (section.type) {
          case "paragraph":
            return <RichTextParagraphBlock key={index} section={section} />;
          case "heading":
            return <RichTextHeadingBlock key={index} section={section} />;
          case "list":
            return <RichTextListBlock key={index} section={section} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
