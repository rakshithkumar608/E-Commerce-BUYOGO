import { ChevronDown, Filter } from "lucide-react"

const ProductFilters = ({
    sort,
    setSort,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice
}) => {
    return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-stretch sm:items-center industrial-panel p-4 sm:p-6">

        <div className="flex items-center gap-3">
            <Filter size={18} style={{ color: 'var(--accent-cyan)' }} />
            <span className="font-mono text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--elec-text-muted)' }}>
                Filters
            </span>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <div className="relative group">
                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="industrial-input px-4 sm:px-5 py-3 pr-10 font-mono text-xs font-bold uppercase appearance-none cursor-pointer w-full sm:w-56"
                >
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                    <option value="rating">Price: Top Rated</option>
                </select>
                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--elec-text-muted)' }} />
            </div>

            <div className="flex items-center gap-2">
                <input
                    value={minPrice}
                    type="number"
                    placeholder="MIN_PRICE"
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="industrial-input px-4 sm:px-5 py-3 font-mono text-xs font-bold w-full sm:w-36 placeholder:opacity-40"
                />
                <span className="font-mono" style={{ color: 'var(--elec-text-muted)' }}>::</span>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="MAX_PRICE"
                    className="industrial-input px-4 sm:px-5 py-3 font-mono text-xs font-bold w-full sm:w-36 placeholder:opacity-40"
                />
            </div>
        </div>
    </div>
    )
}

export default ProductFilters;