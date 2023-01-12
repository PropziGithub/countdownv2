const Logo = (props) => {
    return (
      <svg
        width="226"
        height="56"
        viewBox="0 0 226 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <rect width="226" height="56" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_3_65"
              transform="translate(-0.00535631) scale(0.00326036 0.0131579)"
            />
          </pattern>
          <image
            id="image0_3_65"
            width="310"
            height="76"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  };
  export default Logo;
  