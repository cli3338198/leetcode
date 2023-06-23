class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxes, res = [0] * 1001, 0
        for number_boxes, number_unit_per_box in boxTypes:
            boxes[number_unit_per_box] += number_boxes
        for number_unit_per_box in range(1000, 0, -1):
            number_boxes = min(boxes[number_unit_per_box], truckSize)
            truckSize -= number_boxes
            res += number_boxes * number_unit_per_box
            if truckSize == 0:
                break
        return res
        