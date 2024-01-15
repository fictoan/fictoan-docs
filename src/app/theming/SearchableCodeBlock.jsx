import React, { useState } from "react";
import { Element, InputField, Text } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

export const SearchableCodeBlock = ({ source, language, ...props }) => {
    const [searchString, setSearchString] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [filteredSource, setFilteredSource] = useState(source);

    const handleSearch = (e) => {
        const search = e.target.value;
        setSearchString(search);
        setIsSearching(search.length > 0);

        if (!search) {
            setFilteredSource(source);
            return;
        }

        const filteredLines = source.split("\n")
            .filter(line => line.toLowerCase().includes(search.toLowerCase()))
            .map(line => line.replace(/\s*:\s*/g, " : ").trim()); // Replace colons with spaces and trim whitespace

        setFilteredSource(filteredLines.join("\n"));
    };

    const countMatches = () => {
        return filteredSource ? filteredSource.split("\n").filter(line => line.trim().length > 0).length : 0;
    };

    const clearSearch = () => {
        setSearchString("");
        setIsSearching(false);
        setFilteredSource(source);
    };

    return (
        <>
            <InputField
                type="text"
                value={searchString}
                onChange={handleSearch}
                placeholder="Search for a variable"
                marginBottom="micro"
            />
            {isSearching && (
                <Text verticalMargin="nano">
                    {countMatches()} variable{countMatches() !== 1 ? "s" : ""} matching <code>{searchString}</code>
                    &nbsp;— <Element as="span" textColour="red" onClick={clearSearch} className="is-clickable">Clear</Element>
                </Text>
            )}
            <CodeBlock source={isSearching ? filteredSource : source} language={language} {...props} />
        </>
    );
};
