<script lang="ts">
	export let title: string = '';
	export let headers: string[] = [];
	export let rows: { cells: string[]; bold?: number[] }[] = [];
	export let columnWidths: string[] = [];
</script>

<div class="overflow-x-auto">
	<div class="bg-dark-grey text-off-white rounded-t-lg">
		{#if title && headers.length === 0}
			<div class="p-3 text-left font-semibold">{title}</div>
		{:else if headers.length > 0}
			<table class="w-full text-xs border-collapse" class:table-fixed={columnWidths.length > 0}>
				{#if columnWidths.length > 0}
					<colgroup>
						{#each columnWidths as width}
							<col class={width} />
						{/each}
					</colgroup>
				{/if}
				<thead>
					<tr>
						{#each headers as header}
							<th class="p-3 text-left font-semibold whitespace-normal">{header}</th>
						{/each}
					</tr>
				</thead>
			</table>
		{/if}
	</div>
	<div class="border border-dark-grey/10 border-t-0 rounded-b-lg overflow-hidden bg-off-white">
		<table class="w-full text-xs border-collapse" class:table-fixed={columnWidths.length > 0}>
			{#if columnWidths.length > 0}
				<colgroup>
					{#each columnWidths as width}
						<col class={width} />
					{/each}
				</colgroup>
			{/if}
			<tbody>
				{#each rows as row, rowIndex}
					<tr 
						class:border-b={rowIndex < rows.length - 1}
						class:border-dark-grey/10={rowIndex < rows.length - 1}
						class:bg-light-grey/30={rowIndex % 2 === 0}
					>
						{#each row.cells as cell, cellIndex}
							<td 
								class="p-3 text-left"
								class:font-semibold={row.bold?.includes(cellIndex)}
							>
								{@html cell}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
