// "use client"
// import algoliasearch from "algoliasearch";
// import { InstantSearch, Hits } from 'react-instantsearch-dom'
// import { SearchBar } from './SearchBar' // adjust this path based on where you saved it

// // 🔥 YOUR KEYS + INDEX NAME
// const searchClient = algoliasearch(
//   'O2076BT3CJ',
//   '4539d2b79b6bb805e92f4fc4eddc898f'
// )

// export default function AlgoliaMovieSearch() {
//   return (
//     <InstantSearch indexName="algolia_movie_sample_dataset" searchClient={searchClient}>
//       <SearchBar />
//       <div className="mt-4 relative">
//         <Hits hitComponent={Hit} />
//       </div>
//     </InstantSearch>
//   )
// }

// // 👇 TEMP hit renderer (for the movie dataset)
// function HitsWithConditionalDisplay() {
//   const { searchResults, indexUiState } = useInstantSearch()
//   const query = indexUiState.query || ''

//   if (!query) {
//     return <p className="text-gray-500 text-sm mt-4">Start typing to search movies...</p>
//   }

//   if (searchResults?.hits?.length === 0) {
//     return <p className="text-gray-500 text-sm mt-4">No results found.</p>
//   }

//   return <Hits hitComponent={Hit} />
// }
