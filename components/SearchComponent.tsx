import React, { FC, useState, useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import Search from "@/images/header/search.svg";
import Close from "@/images/header/BurgerMenuClose.svg";

interface HeaderProps {
    className?: string;
  }

type SearchResult = {
  products: any[];
};

const SearchComponent: FC<HeaderProps> = ({className}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState<SearchResult | null>(
    null
  );
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowAll(false);
        setModalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputSearchTerm = event.target.value;
    const formattedSearchTerm = inputSearchTerm.replace(/^\s+/g, "");
    setSearchTerm(formattedSearchTerm);
    setModalOpen(true);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setModalOpen(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const { products} = filteredResults || {
    products: [],
  };

  const resultsToShow = showAll
    ? [...products]
    : [
        ...products.slice(0, 4)
      ];

  return (
    <div className={` ${className} relative w-[100%] xl:w-max `}>
      <form className="relative z-50 flex items-center w-[100%] xl:w-max">
        <input
          id="searchInput"
          className="outline-none w-[100%] border-[1px] border-solid border-[#fe7031] rounded h-[38px] pl-[10px] pr-[60px] xl:w-[400px] xl:h-[42px] 2xl:w-[560px] placeholder-gray-500"
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-[9%]  cursor-pointer xl:right-[52px] w-[18px] h-[18px] flex items-center justify-center"
          >
            <Image src={Close} alt="Clear" width={18} height={18} />
          </button>
        )}
        <Image
          className="absolute cursor-text right-[3%] xl:right-[5%] w-[18px] h-[18px]"
          src={Search}
          alt="Search"
        />
      </form>
      {modalOpen && (
        <>
          <div
            className="fixed inset-0 bg-[#00000010] bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
            onClick={clearSearch}
          ></div>

          <div
            className="grid bg-white shadow-md rounded py-4 absolute w-[100%] xl:w-[100%] z-50 transition-opacity duration-300 ease-in-out"
            ref={modalRef}
          >
            {resultsToShow.length > 0 && (
              <button
                className="flex items-center gap-[8px] text-[#3e77aa] ml-[22px] mb-[16px] font-bold w-max relative group transition duration-300 hover:underline"
                onClick={handleShowAll}
              >
                <span>Переглянути більше</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[-30px] transition-transform duration-300 transform translate-x-0 group-hover:translate-x-3"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.18342 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z"
                    fill="#3e77aa"
                  />
                </svg>
              </button>
            )}
            {resultsToShow.length > 0 ? (
              resultsToShow.map((result, index) => (
                <Link
                  href={`/${result.displayName}`}
                  key={result._id || `${result.name}-${index}`}
                  passHref
                >
                  <div className="flex items-center bg-white rounded px-4 py-2 hover:bg-[#E5E8ED75] transition-colors duration-300 hover:underline">
                    <div className="ml-4">
                      <p
                        className={`font-bold ${
                          result.title
                            ? "text-[14px] xl:text-[16px]"
                            : "text-[14px]"
                        }`}
                      >
                        {result.title || result.name}
                      </p>
                      {result.price && (
                        <p className="text-gray-600 text-[14px] xl:text-[16px]">
                          {result.price}$
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-[14px] text-gray-600 px-[22px] w-[100%]">
                По вашому запиту нічого не знайдено. Уточніть свій запит
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchComponent;
