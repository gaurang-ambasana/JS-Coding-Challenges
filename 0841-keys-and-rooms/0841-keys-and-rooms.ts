function canVisitAllRooms(rooms: number[][]): boolean {
    const keys = new Set<number>(rooms[0]), visited = new Set<number>([0]);

    for (const key of keys)
        for (const k of rooms[key])
            keys.add(k);

    for (const key of keys) {
        visited.add(key);
        keys.delete(key);
    }

    return rooms.length === visited.size;
}