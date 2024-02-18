import QuoteList from '../components/quotes/QuoteList';

const MED_QUOTES = [
    {id:'q1', author:'Med', text:'A word to the wise is enough'},
    {id:'q2', author:'Johan Cruyff', text:'Football is simple but playing simple football is the hardest thing in the world'},
    {id:'q3', author:'Mhd', text:"It's through education that the son of the miner, the son of peasant, the son of the cobbler becomes the President of a great Nation"},
    {id:'q4', author:'Nelson Mandela', text:'Education is the most powerful weapon which you can use to change the world'}
];

const AllQuotes = () => {
    return <QuoteList  quotes={MED_QUOTES} />
};

export default AllQuotes;