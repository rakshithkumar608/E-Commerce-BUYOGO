import { ChevronDown, Filter } from "lucide-react"

const ProductFilters = ({
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice
}) => {
    return(
    <div className="flex flex-wrap gap-6 items-center industrial-panel p-6 bg-panel/30">  

    <div className="flex items-center gap-3 mr-4">
        <Filter size={18} className="text-accent-cyan"/>
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-text-muted">Filters</span>
        </div> 

        <div className="flex-1 flex flex-wrap gap-4">
            <div className="relative group">
                <select 
                value={sort}
                onChange={(e) => setSort(e.target.value)} 
                className="industrial-input px-5 py-3 pr-10 font-mono text-xs font-bold uppercase appearance-none cursor-pointer w-56">
                

                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Price: Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none texxt-text-muted"/>
            </div>

            <div className="flex items-center gap-2">
                <input
                value={minPrice}
                type="number"
                 placeholder="MIN_PRICE"
                onChange={(e) => setMinPrice(e.target.value)}
                className="industrial-input text-black px-5 py-3 font-mono text-xs font-bold w-40 placeholder:opacity-40" />
                <span className="text-black font-mono">::</span>
              <input 
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="MAX_PRICE"
                className="industrial-input px-5 py-3 font-mono text-xs font-bold w-40 placeholder:opacity-40"
              />
            </div>
        </div>
    </div>
    )
}

export default ProductFilters;