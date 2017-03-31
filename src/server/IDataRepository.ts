interface IDataRepository<T> {
    delete(T): number;
    get(id?: number): T|Array<T>;
    insert(T): number;
    update(T): number;
}
export default IDataRepository;
