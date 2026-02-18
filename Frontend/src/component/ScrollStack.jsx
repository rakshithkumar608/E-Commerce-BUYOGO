

export const ScrollStackItem = ({ children, index = 0, itemClassName = '' }) => (
  <div
    className={`sticky top-24 ${itemClassName}`.trim()}
    style={{
      paddingBottom: '40px',
      zIndex: index + 1,
    }}
  >
    <div
      className="w-full rounded-[30px] shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden transition-transform duration-300"
      style={{
        transform: `scale(${1 - index * 0.02})`,
        transformOrigin: 'top center',
      }}
    >
      {children}
    </div>
  </div>
);

const ScrollStack = ({
  children,
  className = '',
}) => {
  return (
    <div className={`relative px-4 sm:px-8 md:px-16 lg:px-20 py-12 ${className}`.trim()}>
      {Array.isArray(children)
        ? children.map((child, i) =>
            child?.type === ScrollStackItem
              ? { ...child, props: { ...child.props, index: i } }
              : child
          )
        : children}
    </div>
  );
};

export default ScrollStack;
