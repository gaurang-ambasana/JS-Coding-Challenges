function canVisitAllRooms(rooms: number[][]): boolean {
    const keys = new Set<number>(rooms[0]), visited = new Set<number>([0]);

    while (keys.size > 0) {
        for (const key of keys)
            rooms[key].forEach(k => keys.add(k));

        for (const key of keys) {
            visited.add(key);
            keys.delete(key);
        }
    }

    return rooms.length === visited.size;
}