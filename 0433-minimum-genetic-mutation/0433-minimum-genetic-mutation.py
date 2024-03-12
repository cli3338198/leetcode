class Solution:
    def is_one_diff(self, gene1: str, gene2: str) -> bool:
        diff = 0
        for i in range(0, len(gene1)):
            if gene1[i] != gene2[i]:
                diff += 1
            if diff > 1:
                return False
        return diff == 1
    
    def minMutation(self, startGene: str, endGene: str, bank: List[str]) -> int:
        if endGene not in bank:
            return -1
        graph = defaultdict(list)
        for gene1 in bank:
            if self.is_one_diff(startGene, gene1):
                graph[startGene].append(gene1)
            for gene2 in bank:
                if gene1 != gene2 and self.is_one_diff(gene1, gene2):
                    graph[gene1].append(gene2)
                    graph[gene2].append(gene1)
        q, mutations, seen = deque([startGene]), 0, set()
        while q:
            l = len(q)
            for i in range(0, l):
                gene = q.popleft()
                seen.add(gene)
                if gene == endGene:
                    return mutations
                for mutation in graph[gene]:
                    if mutation not in seen:
                        q.append(mutation)
            mutations += 1
        return -1
        
                    